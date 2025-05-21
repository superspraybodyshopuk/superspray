
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Home, 
  Image, 
  Star, 
  LogOut, 
  Settings, 
  Info, 
  CheckCircle,
  AlertTriangle,
  AlertOctagon
} from "lucide-react";

const StyleGuide = () => {
  return (
    <div className="space-y-8">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>SuperSpray Admin Style Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="colors">
            <TabsList className="mb-6">
              <TabsTrigger value="colors">Colors</TabsTrigger>
              <TabsTrigger value="typography">Typography</TabsTrigger>
              <TabsTrigger value="components">Components</TabsTrigger>
              <TabsTrigger value="icons">Icons</TabsTrigger>
            </TabsList>
            
            <TabsContent value="colors" className="space-y-6">
              <h3 className="text-xl font-bold mb-4">Colors</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium mb-2">Brand Colors</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="h-20 bg-brand-blue rounded-md flex items-end p-2">
                        <span className="text-white font-medium">Brand Blue</span>
                      </div>
                      <p className="text-sm font-mono">#5DA7DB</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-20 bg-brand-dark rounded-md flex items-end p-2">
                        <span className="text-white font-medium">Brand Dark</span>
                      </div>
                      <p className="text-sm font-mono">#23252F</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-20 bg-brand-gray rounded-md flex items-end p-2">
                        <span className="text-gray-700 font-medium">Brand Gray</span>
                      </div>
                      <p className="text-sm font-mono">#F5F5F5</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">UI Colors</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <div className="h-16 bg-green-500 rounded-md flex items-end p-2">
                        <span className="text-white font-medium">Success</span>
                      </div>
                      <p className="text-sm font-mono">bg-green-500</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 bg-red-500 rounded-md flex items-end p-2">
                        <span className="text-white font-medium">Error</span>
                      </div>
                      <p className="text-sm font-mono">bg-red-500</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 bg-yellow-500 rounded-md flex items-end p-2">
                        <span className="text-white font-medium">Warning</span>
                      </div>
                      <p className="text-sm font-mono">bg-yellow-500</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 bg-blue-500 rounded-md flex items-end p-2">
                        <span className="text-white font-medium">Info</span>
                      </div>
                      <p className="text-sm font-mono">bg-blue-500</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Gray Scale</h4>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    <div className="space-y-2">
                      <div className="h-12 bg-gray-100 rounded-md"></div>
                      <p className="text-xs font-mono">gray-100</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-12 bg-gray-200 rounded-md"></div>
                      <p className="text-xs font-mono">gray-200</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-12 bg-gray-300 rounded-md"></div>
                      <p className="text-xs font-mono">gray-300</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-12 bg-gray-400 rounded-md"></div>
                      <p className="text-xs font-mono">gray-400</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-12 bg-gray-500 rounded-md"></div>
                      <p className="text-xs font-mono">gray-500</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-12 bg-gray-600 rounded-md"></div>
                      <p className="text-xs font-mono">gray-600</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-12 bg-gray-700 rounded-md"></div>
                      <p className="text-xs font-mono text-white">gray-700</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-12 bg-gray-800 rounded-md"></div>
                      <p className="text-xs font-mono text-white">gray-800</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-12 bg-gray-900 rounded-md"></div>
                      <p className="text-xs font-mono text-white">gray-900</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="typography" className="space-y-6">
              <h3 className="text-xl font-bold mb-4">Typography</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-3">Headings</h4>
                  <div className="space-y-4 border rounded-lg p-4">
                    <div>
                      <h1 className="text-4xl font-bold">Heading 1</h1>
                      <p className="text-sm text-gray-500 mt-1">text-4xl font-bold</p>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">Heading 2</h2>
                      <p className="text-sm text-gray-500 mt-1">text-3xl font-bold</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Heading 3</h3>
                      <p className="text-sm text-gray-500 mt-1">text-2xl font-bold</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Heading 4</h4>
                      <p className="text-sm text-gray-500 mt-1">text-xl font-bold</p>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold">Heading 5</h5>
                      <p className="text-sm text-gray-500 mt-1">text-lg font-bold</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3">Body Text</h4>
                  <div className="space-y-4 border rounded-lg p-4">
                    <div>
                      <p className="text-base">Regular paragraph text. This is the default body text style used throughout the application.</p>
                      <p className="text-sm text-gray-500 mt-1">text-base</p>
                    </div>
                    <div>
                      <p className="text-sm">Small text is used for secondary information and smaller UI elements.</p>
                      <p className="text-sm text-gray-500 mt-1">text-sm</p>
                    </div>
                    <div>
                      <p className="text-xs">Extra small text for fine print and very secondary information.</p>
                      <p className="text-sm text-gray-500 mt-1">text-xs</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3">Text Styles</h4>
                  <div className="space-y-4 border rounded-lg p-4">
                    <div>
                      <p className="font-bold">Bold text is used for emphasis.</p>
                      <p className="text-sm text-gray-500 mt-1">font-bold</p>
                    </div>
                    <div>
                      <p className="font-medium">Medium weight text is used for subtitles and labels.</p>
                      <p className="text-sm text-gray-500 mt-1">font-medium</p>
                    </div>
                    <div>
                      <p className="italic">Italic text can be used for quotes or emphasis.</p>
                      <p className="text-sm text-gray-500 mt-1">italic</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Muted text is used for secondary information.</p>
                      <p className="text-sm text-gray-500 mt-1">text-gray-500</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="components" className="space-y-6">
              <h3 className="text-xl font-bold mb-4">Components</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-3">Buttons</h4>
                  <div className="p-4 border rounded-lg space-y-4">
                    <div className="flex flex-wrap gap-4">
                      <Button>Default Button</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="destructive">Destructive</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="link">Link</Button>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Button disabled>Disabled</Button>
                      <Button size="sm">Small</Button>
                      <Button size="lg">Large</Button>
                      <Button>
                        <CheckCircle className="mr-2 h-4 w-4" /> With Icon
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3">Form Elements</h4>
                  <div className="p-4 border rounded-lg space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="example-input">Text Input</Label>
                        <Input id="example-input" placeholder="Enter text here..." />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="disabled-input">Disabled Input</Label>
                        <Input id="disabled-input" disabled placeholder="Disabled input" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3">Cards</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>This is a basic card with header and content.</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-50">
                      <CardHeader className="bg-gray-100">
                        <CardTitle>Alternative Card</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Cards can have different background colors.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3">Alerts</h4>
                  <div className="space-y-4">
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertTitle>Information</AlertTitle>
                      <AlertDescription>
                        This is an informational alert.
                      </AlertDescription>
                    </Alert>
                    <Alert variant="destructive">
                      <AlertOctagon className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>
                        This is an error alert.
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="icons" className="space-y-6">
              <h3 className="text-xl font-bold mb-4">Icons</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-3">Navigation Icons</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 border rounded-lg p-4">
                    <div className="flex flex-col items-center space-y-2">
                      <Home className="h-8 w-8" />
                      <span className="text-sm">Home</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Image className="h-8 w-8" />
                      <span className="text-sm">Image</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Star className="h-8 w-8" />
                      <span className="text-sm">Star</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Settings className="h-8 w-8" />
                      <span className="text-sm">Settings</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <LogOut className="h-8 w-8" />
                      <span className="text-sm">LogOut</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3">Status Icons</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 border rounded-lg p-4">
                    <div className="flex flex-col items-center space-y-2">
                      <CheckCircle className="h-8 w-8 text-green-500" />
                      <span className="text-sm">CheckCircle</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <AlertTriangle className="h-8 w-8 text-yellow-500" />
                      <span className="text-sm">AlertTriangle</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <AlertOctagon className="h-8 w-8 text-red-500" />
                      <span className="text-sm">AlertOctagon</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Info className="h-8 w-8 text-blue-500" />
                      <span className="text-sm">Info</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default StyleGuide;
