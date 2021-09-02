class geometricFig {
    aQua: number
    aRect: number
    bRect: number
    hTri: number
    bTri: number
    bPara: number
    hPara:number
    bMaiorTrap: number
    bMenorTrap: number
    hTrap:number
    radCirc:number


    constructor(aQua: number,aRect: number, bRect: number, 
        hTri: number, bTri: number, bPara: number,
        hPara:number, bMaiorTrap: number, bMenorTrap: number,
        hTrap:number,radCirc:number){

        this.aQua = aQua;
        this.aRect =aRect;
        this.bRect = bRect;
        this.hTri = hTri;
        this.bTri = bTri;
        this.bPara = bPara;
        this.hPara = hPara;
        this.bMaiorTrap = bMaiorTrap;
        this.bMenorTrap = bMenorTrap;
        this.hTrap = hTrap;
        this.radCirc = radCirc;

        }

        getAreaQuadrado(): number | string {
            let quadrado = this.aQua * this.aQua
            return quadrado +'é a area do quadrado'
        }

        getAreaRectangulo (): number | string {
            let rectangulo = this.aRect * this.bRect
            return rectangulo + 'é a area do rectangulo'
        }

        getAreaTriangulo (): number | string{
            let triangulo = (this.hTri * this.bTri) / 2
            return triangulo + 'é a area do triangulo'
        }

        getAreaPararlelogramo (): number | string {
            let paralelogramo = this.bPara * this.hPara
            return paralelogramo + 'é a area do paralelogramo'
        }

        getAreaTrapezio () : number | string {
            let trapezio = ((this.bMaiorTrap * this.bMenorTrap) / 2 ) *this.hTrap
            return trapezio +'é a area do trapezio'
        }

        getAreaCirculo(): number | string {
            let circulo = 3.14 * (this.radCirc * this.radCirc)
            return circulo + 'é a area do circulo'
        }

}

const geometricfig = new geometricFig(4,2,3,6,5,8,9,1,2,3,5);
console.log(geometricfig.getAreaQuadrado())
console.log(geometricfig.getAreaTriangulo())
console.log(geometricfig.getAreaPararlelogramo())
console.log(geometricfig.getAreaRectangulo())
console.log(geometricfig.getAreaTrapezio())


