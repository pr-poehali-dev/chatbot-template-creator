import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Templates = () => {
  const templates = [
    {
      id: 1,
      name: 'E-commerce Bot',
      description: 'Готовый бот для интернет-магазина с корзиной и платежами',
      category: 'E-commerce',
      downloads: 1240,
      rating: 4.8,
      features: ['Каталог товаров', 'Корзина', 'Оплата', 'Отслеживание заказов']
    },
    {
      id: 2,
      name: 'Restaurant Bot',
      description: 'Бот для ресторана с меню, бронированием и доставкой',
      category: 'Restaurant',
      downloads: 890,
      rating: 4.6,
      features: ['Меню', 'Бронирование', 'Доставка', 'Отзывы']
    },
    {
      id: 3,
      name: 'Support Bot',
      description: 'Бот техподдержки с FAQ и эскалацией к оператору',
      category: 'Support',
      downloads: 2100,
      rating: 4.9,
      features: ['FAQ', 'Тикеты', 'Эскалация', 'Аналитика']
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Библиотека шаблонов</h2>
        <div className="flex items-center space-x-4">
          <Input placeholder="Поиск шаблонов..." className="w-64" />
          <Button variant="outline">
            <Icon name="Filter" size={16} className="mr-2" />
            Фильтр
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card key={template.id} className="bg-card/50 backdrop-blur hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{template.name}</CardTitle>
                <Badge variant="secondary">{template.category}</Badge>
              </div>
              <CardDescription>{template.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Download" size={14} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{template.downloads}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={14} className="text-yellow-500" />
                  <span className="text-sm">{template.rating}</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <p className="text-sm font-medium">Возможности:</p>
                <div className="flex flex-wrap gap-1">
                  {template.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Button className="w-full" variant="outline">
                <Icon name="Eye" size={16} className="mr-2" />
                Предпросмотр
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Templates;