class A{
    constructor(fnumber,snumber){
       this.firstNumber = fnumber;
       this.secondNumber = snumber;
    }
    
    callB() {
      return  new B(this.firstNumber,this.secondNumber)
    }
 }

 class B{
    constructor(fn,sn){
        this.firstN=fn;
        this.secondN=sn
    }
   
    callC(){
        return new C(this.firstN % 10, this.secondN % 10)
    }

 }


 class C{
    constructor(lastD1,lastD2){
        this.lasdDegit1=lastD1;
        this.lasdDegit2=lastD2
    }

    multiply(){
        return this.lasdDegit1*this.lasdDegit2
    }
 }
    const classA = new A(process.argv[2] , process.argv[3]);

    console.log(classA.callB().callC().multiply())