import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'E-commerce Support Bot',
      platform: 'telegram',
      status: 'active',
      users: 1247,
      messages: 4821,
      lastActivity: '2 min ago',
      template: 'E-commerce'
    },
    {
      id: 2,
      name: 'Pizza Order Bot',
      platform: 'whatsapp',
      status: 'draft',
      users: 0,
      messages: 0,
      lastActivity: '1 hour ago',
      template: 'Restaurant'
    },
    {
      id: 3,
      name: 'Customer Service',
      platform: 'telegram',
      status: 'active',
      users: 856,
      messages: 2134,
      lastActivity: '5 min ago',
      template: 'Support'
    }
  ];

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

  const stats = [
    { label: 'Активные боты', value: '12', change: '+2', icon: 'Bot' },
    { label: 'Всего пользователей', value: '2,103', change: '+12%', icon: 'Users' },
    { label: 'Сообщений сегодня', value: '6,955', change: '+8%', icon: 'MessageSquare' },
    { label: 'Конверсия', value: '94.2%', change: '+2.1%', icon: 'TrendingUp' }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground transition-colors duration-300">
        {/* Header */}
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

        {/* Main Content */}
        <main className="container mx-auto px-6 py-8">
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:grid-cols-none lg:inline-grid">
              <TabsTrigger value="dashboard" className="flex items-center gap-2">
                <Icon name="LayoutDashboard" size={16} />
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="constructor" className="flex items-center gap-2">
                <Icon name="Workflow" size={16} />
                Конструктор
              </TabsTrigger>
              <TabsTrigger value="templates" className="flex items-center gap-2">
                <Icon name="Library" size={16} />
                Шаблоны
              </TabsTrigger>
              <TabsTrigger value="integrations" className="flex items-center gap-2">
                <Icon name="Plug" size={16} />
                Интеграции
              </TabsTrigger>
              <TabsTrigger value="export" className="flex items-center gap-2">
                <Icon name="Download" size={16} />
                Экспорт
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <Icon name="BarChart3" size={16} />
                Аналитика
              </TabsTrigger>
            </TabsList>

            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur hover:shadow-lg transition-all duration-300">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {stat.label}
                      </CardTitle>
                      <Icon name={stat.icon} size={20} className="text-primary" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-success flex items-center mt-1">
                        <Icon name="TrendingUp" size={12} className="mr-1" />
                        {stat.change} от прошлого месяца
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Projects */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Мои проекты</h2>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Создать бота
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <Card key={project.id} className="bg-card/50 backdrop-blur hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Icon 
                              name={project.platform === 'telegram' ? 'MessageCircle' : 'Phone'} 
                              size={20} 
                              className="text-primary" 
                            />
                            <CardTitle className="text-lg">{project.name}</CardTitle>
                          </div>
                          <Badge 
                            variant={project.status === 'active' ? 'default' : 'secondary'}
                            className={project.status === 'active' ? 'bg-success/10 text-success border-success/20' : ''}
                          >
                            {project.status === 'active' ? 'Активен' : 'Черновик'}
                          </Badge>
                        </div>
                        <CardDescription>
                          Шаблон: {project.template}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="text-sm text-muted-foreground">
                              <Icon name="Users" size={14} className="inline mr-1" />
                              {project.users}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              <Icon name="MessageSquare" size={14} className="inline mr-1" />
                              {project.messages}
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Последняя активность: {project.lastActivity}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Constructor Tab */}
            <TabsContent value="constructor" className="space-y-6">
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
            </TabsContent>

            {/* Templates Tab */}
            <TabsContent value="templates" className="space-y-6">
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
            </TabsContent>

            {/* Integrations Tab */}
            <TabsContent value="integrations" className="space-y-6">
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
            </TabsContent>

            {/* Export Tab */}
            <TabsContent value="export" className="space-y-6">
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
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Аналитика</h2>
                <Button variant="outline">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Последние 30 дней
                </Button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-lg">Активность пользователей</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Новые пользователи</span>
                        <span className="text-sm font-medium">+127</span>
                      </div>
                      <Progress value={75} className="h-2" />
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Активные пользователи</span>
                        <span className="text-sm font-medium">1,847</span>
                      </div>
                      <Progress value={85} className="h-2" />
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Возвращающиеся</span>
                        <span className="text-sm font-medium">892</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-lg">Производительность ботов</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Среднее время ответа</span>
                        <span className="text-sm font-medium">1.2с</span>
                      </div>
                      <Progress value={90} className="h-2" />
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Успешных диалогов</span>
                        <span className="text-sm font-medium">94.2%</span>
                      </div>
                      <Progress value={94} className="h-2" />
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Конверсия в продажи</span>
                        <span className="text-sm font-medium">12.8%</span>
                      </div>
                      <Progress value={43} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Index;