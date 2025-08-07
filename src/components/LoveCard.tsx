import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useState } from 'react';
import { FaHeart } from "react-icons/fa"
const LoveCard = () => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');

  const handleSubmit = () => {};

  return (
    <div>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl flex flex-col items-center gap-2">
            <FaHeart className="text-red-500" />
            Love Match
          </CardTitle>
          <CardDescription>Découvrez votre compatibilité</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label>Premier prenom</Label>
                <Input id="name1" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className="flex items-center justify-center">
                <FaHeart className="text-red-500 -rotate-10 animate-bounce" size={24} />
              </div>
              <div className="grid gap-3">
                <Label>Deuxième prénom</Label>
                <Input id="name2" type="text" value={secondName} onChange={(e) => setSecondName(e.target.value)} />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" variant={'destructive'} className="w-full">
                  Tester la compatibilité
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoveCard;
