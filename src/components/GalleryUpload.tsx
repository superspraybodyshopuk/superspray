
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { v4 as uuidv4 } from 'uuid';
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";

const GalleryUpload = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isBeforeAfter, setIsBeforeAfter] = useState(false);
  const [beforeFile, setBeforeFile] = useState<File | null>(null);
  const [afterFile, setAfterFile] = useState<File | null>(null);
  const [beforePreview, setBeforePreview] = useState<string | null>(null);
  const [afterPreview, setAfterPreview] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBeforeFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setBeforeFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = () => {
        setBeforePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAfterFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAfterFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = () => {
        setAfterPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setPreview(null);
  };

  const removeBeforeFile = () => {
    setBeforeFile(null);
    setBeforePreview(null);
  };

  const removeAfterFile = () => {
    setAfterFile(null);
    setAfterPreview(null);
  };

  const toggleBeforeAfter = (checked: boolean) => {
    setIsBeforeAfter(checked);
    if (!checked) {
      // Reset before/after fields when turning off
      setBeforeFile(null);
      setAfterFile(null);
      setBeforePreview(null);
      setAfterPreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation for standard upload
    if (!isBeforeAfter && (!title || !category || !description || !selectedFile)) {
      toast({
        title: "Error",
        description: "Please complete all required fields and upload an image.",
        variant: "destructive",
      });
      return;
    }

    // Validation for before/after upload
    if (isBeforeAfter && (!title || !category || !description || !beforeFile || !afterFile)) {
      toast({
        title: "Error",
        description: "Please complete all required fields and upload both before and after images.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      let imageUrl = null;
      let beforeImageUrl = null;
      let afterImageUrl = null;

      // Upload standard image if not before/after
      if (!isBeforeAfter && selectedFile) {
        const fileExt = selectedFile.name.split('.').pop();
        const fileName = `${uuidv4()}.${fileExt}`;
        const filePath = `${fileName}`;
        
        const { error: uploadError } = await supabase.storage
          .from('gallery')
          .upload(filePath, selectedFile);
          
        if (uploadError) throw uploadError;
        imageUrl = filePath;
      }

      // Upload before image
      if (isBeforeAfter && beforeFile) {
        const beforeExt = beforeFile.name.split('.').pop();
        const beforeName = `before_${uuidv4()}.${beforeExt}`;
        const beforePath = `${beforeName}`;
        
        const { error: beforeUploadError } = await supabase.storage
          .from('gallery')
          .upload(beforePath, beforeFile);
          
        if (beforeUploadError) throw beforeUploadError;
        beforeImageUrl = beforePath;
      }

      // Upload after image
      if (isBeforeAfter && afterFile) {
        const afterExt = afterFile.name.split('.').pop();
        const afterName = `after_${uuidv4()}.${afterExt}`;
        const afterPath = `${afterName}`;
        
        const { error: afterUploadError } = await supabase.storage
          .from('gallery')
          .upload(afterPath, afterFile);
          
        if (afterUploadError) throw afterUploadError;
        afterImageUrl = afterPath;
      }
      
      // Create record in gallery table
      const { error: insertError } = await supabase
        .from('gallery')
        .insert({
          title,
          category,
          description,
          image_url: imageUrl || (afterImageUrl || ''), // Use after image as main image for before/after
          is_before_after: isBeforeAfter,
          before_image_url: beforeImageUrl,
          after_image_url: afterImageUrl
        });
        
      if (insertError) throw insertError;
      
      toast({
        title: "Upload successful",
        description: "The gallery image has been added.",
      });
      
      // Reset form
      setTitle("");
      setCategory("");
      setDescription("");
      setSelectedFile(null);
      setPreview(null);
      setIsBeforeAfter(false);
      setBeforeFile(null);
      setAfterFile(null);
      setBeforePreview(null);
      setAfterPreview(null);
    } catch (error: any) {
      toast({
        title: "Upload failed",
        description: error.message || "There was an error uploading the image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="shadow-md">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">Add Gallery Image</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Classic Mustang Restoration"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="category">Category *</Label>
            <Select 
              onValueChange={setCategory}
              value={category}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="restoration">Restoration</SelectItem>
                <SelectItem value="repair">Repair</SelectItem>
                <SelectItem value="paintwork">Paintwork</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description of the work completed"
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox 
              id="beforeAfter" 
              checked={isBeforeAfter} 
              onCheckedChange={toggleBeforeAfter}
            />
            <label
              htmlFor="beforeAfter"
              className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              This is a before/after image set
            </label>
          </div>
          
          {!isBeforeAfter ? (
            <div>
              <Label htmlFor="image">Single Image Upload *</Label>
              {!preview ? (
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 mt-1">
                  <div className="flex flex-col items-center">
                    <Upload className="h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500">
                      Drag and drop an image, or click to browse
                    </p>
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="w-full mt-4"
                    />
                  </div>
                </div>
              ) : (
                <div className="mt-2 relative">
                  <img 
                    src={preview} 
                    alt="Preview" 
                    className="max-h-[300px] rounded-md mx-auto"
                  />
                  <button
                    type="button"
                    onClick={removeFile}
                    className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <div>
                <Label htmlFor="beforeImage">Before Image *</Label>
                {!beforePreview ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-6 mt-1">
                    <div className="flex flex-col items-center">
                      <Upload className="h-12 w-12 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-500">
                        Upload the Before image
                      </p>
                      <Input
                        id="beforeImage"
                        type="file"
                        accept="image/*"
                        onChange={handleBeforeFileChange}
                        className="w-full mt-4"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="mt-2 relative">
                    <img 
                      src={beforePreview} 
                      alt="Before Preview" 
                      className="max-h-[200px] rounded-md mx-auto"
                    />
                    <button
                      type="button"
                      onClick={removeBeforeFile}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="afterImage">After Image *</Label>
                {!afterPreview ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-6 mt-1">
                    <div className="flex flex-col items-center">
                      <Upload className="h-12 w-12 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-500">
                        Upload the After image
                      </p>
                      <Input
                        id="afterImage"
                        type="file"
                        accept="image/*"
                        onChange={handleAfterFileChange}
                        className="w-full mt-4"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="mt-2 relative">
                    <img 
                      src={afterPreview} 
                      alt="After Preview" 
                      className="max-h-[200px] rounded-md mx-auto"
                    />
                    <button
                      type="button"
                      onClick={removeAfterFile}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
          
          <Button 
            type="submit" 
            className="w-full bg-brand-blue hover:bg-opacity-80"
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Uploading...
              </>
            ) : (
              "Upload Gallery Image"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default GalleryUpload;
