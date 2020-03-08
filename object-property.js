const students = [
    {id:21, name:'Omar sunny'},
    {id: 31, name:'Maanaaaa'},
    {id: 41, name:'Mayuri'},
    {id:71, name:'deepjol'},

];
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id>40);

console.log(biggerOne);