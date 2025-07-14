import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Analytics = () => {
  return (
    <div className="space-y-6">
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
    </div>
  );
};

export default Analytics;