import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const Header = ({ isDarkMode, setIsDarkMode }: HeaderProps) => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Bot" size={20} className="text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold">ChatBot Constructor</h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="rounded-full"
            >
              <Icon name={isDarkMode ? 'Sun' : 'Moon'} size={20} />
            </Button>
            
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                <Icon name="Circle" size={8} className="mr-1 fill-current" />
                Online
              </Badge>
            </div>
            
            <Button variant="ghost" size="icon" className="rounded-full">
              <Icon name="Bell" size={20} />
            </Button>
            
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Icon name="User" size={16} className="text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;