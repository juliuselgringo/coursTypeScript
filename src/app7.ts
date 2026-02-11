class Poisson{

}

class Chat{

}

type AnimalOptions = {nager: any} | {sauter: any};
type AnimalCondition<T> = T extends {nager:any} ? Poisson : Chat;

function generator<T extends AnimalOptions>(options: T): AnimalCondition<T>{
    if("nager" in options){
        return new Poisson();
    }else{
        return new Chat();
    }
}

const aba = generator({nager: 'aze'});
const abb = generator({sauter: 'aze'});

class Poisson1{
    cri(){
        return false;
    }
}

class Chat1{
    cri(){
        return "miaou";
    }
}

type AnimalCri<T> = T extends{cri:() => infer U} ? U : never;

type A1 = AnimalCri<Chat1>;
type B1 = AnimalCri<Poisson1>;