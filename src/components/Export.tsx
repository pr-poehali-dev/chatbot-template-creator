import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Export = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Экспорт кода</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-card/50 backdrop-blur">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Icon name="FileCode" size={24} className="text-primary" />
              <div>
                <CardTitle className="text-lg">Python Export</CardTitle>
                <CardDescription>Экспорт кода на Python с использованием aiogram</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Включает:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Полный исходный код бота</li>
                <li>• Файл requirements.txt</li>
                <li>• Конфигурационные файлы</li>
                <li>• Документацию по развертыванию</li>
              </ul>
            </div>
            <Button className="w-full">
              <Icon name="Download" size={16} className="mr-2" />
              Скачать Python код
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Icon name="FileCode" size={24} className="text-primary" />
              <div>
                <CardTitle className="text-lg">Node.js Export</CardTitle>
                <CardDescription>Экспорт кода на Node.js с использованием Telegraf</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Включает:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Полный исходный код бота</li>
                <li>• Файл package.json</li>
                <li>• TypeScript типы</li>
                <li>• Docker конфигурацию</li>
              </ul>
            </div>
            <Button className="w-full">
              <Icon name="Download" size={16} className="mr-2" />
              Скачать Node.js код
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Export;