let even: number[] = [2, 4, 6, 8];
let langs: string[] = ['Java', 'Ruby', 'Golang'];

for(let i=0; i < even.length; i++) {
    console.log(even[i]);
}
for(let index in langs) {
    console.log(langs[index]);
}
let countries: string[] = [];
countries['India'] = 'New Delhi';
countries['USA'] = 'DC';
countries['England'] = 'London';
for(let key in countries) {
    console.log(key, countries[key]);
}
