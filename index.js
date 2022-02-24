function receivesAFunction(cb){
    return cb();
}
receivesAFunction(function (){ return Spy});

function returnsANamedFunction(){
    return receivesAFunction;
}
function returnsAnAnonymousFunction(){
    return function(){}
};