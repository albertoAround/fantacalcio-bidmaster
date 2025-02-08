import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Star } from "lucide-react";

interface PlayerCardProps {
  name: string;
  team: string;
  role: string;
  startingPrice: number;
  currentBid: number;
  timeLeft: string;
  onBid: () => void;
  currentBidTeam: string; // Pbd98
}

export function PlayerCard({
  name,
  team,
  role,
  startingPrice,
  currentBid,
  timeLeft,
  onBid,
  currentBidTeam, // Pbd98
}: PlayerCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden transition-all duration-300 hover:shadow-lg animate-slide-up">
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <Badge className="mb-2" variant="secondary">
              {role}
            </Badge>
            <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
            <p className="text-sm text-muted-foreground">{team}</p>
          </div>
          {currentBid > startingPrice && (
            <Badge variant="secondary" className="flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              Hot
            </Badge>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Prezzo iniziale</span>
            <span className="font-medium">{startingPrice}M</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Offerta attuale</span>
            <span className="font-medium text-primary">{currentBid}M</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Squadra attuale</span>
            <span className="font-medium text-primary">{currentBidTeam}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Tempo rimasto</span>
            <span className="font-medium text-destructive">{timeLeft}</span>
          </div>
        </div>

        <Button
          onClick={onBid}
          className="w-full group hover:shadow-md transition-all duration-300"
        >
          Fai un'offerta
          <Star className="w-4 h-4 ml-2 transition-transform group-hover:scale-110" />
        </Button>
      </div>
    </Card>
  );
}
