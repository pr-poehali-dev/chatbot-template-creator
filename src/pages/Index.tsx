import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';
import Constructor from '@/components/Constructor';
import Templates from '@/components/Templates';
import Integrations from '@/components/Integrations';
import Export from '@/components/Export';
import Analytics from '@/components/Analytics';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground transition-colors duration-300">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

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

            <TabsContent value="dashboard" className="space-y-8">
              <Dashboard />
            </TabsContent>

            <TabsContent value="constructor" className="space-y-6">
              <Constructor />
            </TabsContent>

            <TabsContent value="templates" className="space-y-6">
              <Templates />
            </TabsContent>

            <TabsContent value="integrations" className="space-y-6">
              <Integrations />
            </TabsContent>

            <TabsContent value="export" className="space-y-6">
              <Export />
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <Analytics />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Index;