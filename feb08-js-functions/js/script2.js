(function(){

    var names = ['kevin', 'cobi', 'david', 'monty', 'eric', 'gus', 'rosa', 'vanessa', 'waldo', 'al', 'marisa', 'haley'].sort();
    var cereals = ['cheerios', 'chex', 'kix', 'fruity pebbles', 'captain crunch', 'shredded wheat', 'raisin bran', 'kashi', 'lucky charms', 'corn pops', 'cocoa puffs', 'cracklin oat bran'].sort();

    var randName = Math.ceil(Math.random() * names.length) - 1;
    var randCereal = Math.ceil(Math.random() * cereals.length) - 1;

    var spyname = function(){
        alert(names[arguments[0]] + ' ' + cereals[arguments[1]]);
    }(randName, randCereal);

})();
