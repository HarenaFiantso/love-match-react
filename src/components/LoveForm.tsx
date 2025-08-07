import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { Heart, HeaterIcon } from 'lucide-react';

export function LoveForm({ className, ...props }: React.ComponentProps<'div'>) {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(firstName);
    console.log(secondName);
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
        <CardHeader className="text-center">
          <Heart className="mx-auto mb-4 h-8 w-8 text-red-500" />
          <CardTitle className="text-2xl">Love Match</CardTitle>
          <CardDescription>Lorem ipsum dolor sit.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label>Premier prenom</Label>
                <Input id="name1" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div>
                <Heart className='mx-auto mb-4 h-8 w-8 text-red-500 animate-pulse'  />
              </div>
              <div className="grid gap-3">
                <Label>Deuxième prénom</Label>
                <Input id="name2" type="text" value={secondName} onChange={(e) => setSecondName(e.target.value)} />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full bg-amber-200 hover:bg-amber-300 text-black">
                  Tester la compatibilité
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
