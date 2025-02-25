import { ArmaMagica } from "./armaMagica";

export class Inventario {
  private armas: ArmaMagica[] = [];

  adicionarArma(arma: ArmaMagica): void {
    this.armas.push(arma);
  }

  listarArmas(): ArmaMagica[] {
    return this.armas;
  }
}
