import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Constructor = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Визуальный конструктор</h2>
        <Button>
          <Icon name="Save" size={16} className="mr-2" />
          Сохранить
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[600px]">
        {/* Sidebar with components */}
        <div className="lg:col-span-1 space-y-4">
          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-lg">Компоненты</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-1 gap-2">
                <Button variant="outline" className="justify-start">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Сообщение
                </Button>
                <Button variant="outline" className="justify-start">
                  <Icon name="HelpCircle" size={16} className="mr-2" />
                  Вопрос
                </Button>
                <Button variant="outline" className="justify-start">
                  <Icon name="Zap" size={16} className="mr-2" />
                  Условие
                </Button>
                <Button variant="outline" className="justify-start">
                  <Icon name="Database" size={16} className="mr-2" />
                  API запрос
                </Button>
                <Button variant="outline" className="justify-start">
                  <Icon name="CreditCard" size={16} className="mr-2" />
                  Платеж
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main canvas */}
        <div className="lg:col-span-3">
          <Card className="bg-card/50 backdrop-blur h-full">
            <CardContent className="p-6 h-full">
              <div className="flex items-center justify-center h-full border-2 border-dashed border-border rounded-lg">
                <div className="text-center">
                  <Icon name="Workflow" size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg font-medium mb-2">Начните создавать сценарий</p>
                  <p className="text-muted-foreground">Перетащите компоненты из левой панели</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Constructor;