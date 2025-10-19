import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [area, setArea] = useState([20]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    message: ''
  });

  const pricePerSqm = 850;
  const totalPrice = area[0] * pricePerSqm;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Наш специалист свяжется с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', address: '', message: '' });
  };

  const galleryImages = [
    'https://cdn.poehali.dev/projects/6b34037d-08d1-4c82-adb8-a38a0fa34407/files/46646ffc-9bf1-491a-9dff-82dd48424ebe.jpg',
    'https://cdn.poehali.dev/projects/6b34037d-08d1-4c82-adb8-a38a0fa34407/files/47481493-6839-41d1-add0-c6e26e69a3df.jpg',
    'https://cdn.poehali.dev/projects/6b34037d-08d1-4c82-adb8-a38a0fa34407/files/c5384beb-90ac-45d8-8224-445bcf273054.jpg'
  ];

  const advantages = [
    { icon: 'Zap', title: 'Быстрый монтаж', desc: 'Установка за 1 день без пыли и грязи' },
    { icon: 'Shield', title: 'Гарантия 10 лет', desc: 'Официальная гарантия на все работы' },
    { icon: 'Sparkles', title: 'Европейские материалы', desc: 'Только сертифицированные полотна' },
    { icon: 'Award', title: '5000+ проектов', desc: 'Опыт работы более 12 лет' }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 text-center text-white animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-2xl">
            Натяжные потолки
          </h1>
          <p className="text-2xl md:text-3xl mb-8 drop-shadow-lg">
            Превратим ваш интерьер в произведение искусства
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 hover:scale-105 transition-transform">
              <Icon name="Phone" className="mr-2" />
              Позвонить
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-transform">
              <Icon name="Calculator" className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={48} className="text-white" />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-muted/30">
        <div className="container">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Наши преимущества
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Почему выбирают нас
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, idx) => (
              <Card key={idx} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Галерея работ
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Наши лучшие проекты
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                <img src={img} alt={`Проект ${idx + 1}`} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold text-lg">Проект #{idx + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container max-w-2xl">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Калькулятор стоимости
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Узнайте примерную стоимость за 30 секунд
          </p>
          <Card className="shadow-2xl border-2 animate-scale-in">
            <CardHeader>
              <CardTitle>Рассчитайте стоимость потолка</CardTitle>
              <CardDescription>Укажите площадь помещения</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-lg mb-4 block">Площадь: {area[0]} м²</Label>
                <Slider value={area} onValueChange={setArea} min={5} max={100} step={1} className="mb-2" />
              </div>
              <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-lg text-white">
                <p className="text-sm opacity-90">Примерная стоимость:</p>
                <p className="text-4xl font-bold">{totalPrice.toLocaleString()} ₽</p>
                <p className="text-sm opacity-75 mt-2">* Цена указана ориентировочно</p>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Точную стоимость рассчитает наш специалист после замера
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-white">
        <div className="container max-w-2xl">
          <h2 className="text-5xl font-bold text-center mb-4">
            Бесплатный замер
          </h2>
          <p className="text-center text-white/90 mb-12 text-lg">
            Оставьте заявку и получите точный расчёт
          </p>
          <Card className="shadow-2xl border-none animate-scale-in">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base">Ваше имя *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-2 h-12"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-base">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="mt-2 h-12"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <Label htmlFor="address" className="text-base">Адрес</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="mt-2 h-12"
                    placeholder="ул. Примерная, д. 1"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-base">Комментарий</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2"
                    placeholder="Расскажите о ваших пожеланиях"
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full h-14 text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  <Icon name="Send" className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 bg-foreground text-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Натяжные потолки</h3>
              <p className="text-background/80">Профессиональный монтаж с 2012 года</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <div className="space-y-2 text-background/80">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@potolki.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  Москва, ул. Примерная, 1
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Режим работы</h4>
              <div className="space-y-2 text-background/80">
                <p>Пн-Пт: 9:00 - 20:00</p>
                <p>Сб-Вс: 10:00 - 18:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-6 text-center text-background/60">
            <p>© 2024 Натяжные потолки. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
