import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Dashboard = () => {
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

  const stats = [
    { label: 'Активные боты', value: '12', change: '+2', icon: 'Bot' },
    { label: 'Всего пользователей', value: '2,103', change: '+12%', icon: 'Users' },
    { label: 'Сообщений сегодня', value: '6,955', change: '+8%', icon: 'MessageSquare' },
    { label: 'Конверсия', value: '94.2%', change: '+2.1%', icon: 'TrendingUp' }
  ];

  return (
    <div className="space-y-8">
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
    </div>
  );
};

export default Dashboard;