import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Integrations = () => {
  const integrations = [
    {
      name: 'Telegram Bot API',
      status: 'connected',
      description: 'Подключение к Telegram для создания ботов',
      icon: 'MessageCircle'
    },
    {
      name: 'WhatsApp Business API',
      status: 'disconnected',
      description: 'Интеграция с WhatsApp Business',
      icon: 'Phone'
    },
    {
      name: 'OpenAI GPT',
      status: 'connected',
      description: 'AI-возможности для умных ответов',
      icon: 'Brain'
    },
    {
      name: 'Stripe Payments',
      status: 'disconnected',
      description: 'Обработка платежей в боте',
      icon: 'CreditCard'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Интеграции</h2>
        <Button>
          <Icon name="Plus" size={16} className="mr-2" />
          Добавить интеграцию
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {integrations.map((integration, index) => (
          <Card key={index} className="bg-card/50 backdrop-blur">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Icon name={integration.icon} size={24} className="text-primary" />
                  <div>
                    <CardTitle className="text-lg">{integration.name}</CardTitle>
                    <CardDescription>{integration.description}</CardDescription>
                  </div>
                </div>
                <Badge 
                  variant={integration.status === 'connected' ? 'default' : 'secondary'}
                  className={integration.status === 'connected' ? 'bg-success/10 text-success border-success/20' : ''}
                >
                  {integration.status === 'connected' ? 'Подключено' : 'Отключено'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Button 
                variant={integration.status === 'connected' ? 'outline' : 'default'}
                className="w-full"
              >
                {integration.status === 'connected' ? 'Настроить' : 'Подключить'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Integrations;