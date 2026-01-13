type GreetingFunction = {
    (name: string): string; 
    description: string; 
};

const greet: GreetingFunction = (name: string) => {
    return `Hello, ${name}!`;
};

greet.description = "A function to greet users";

console.log(greet("Alice"));          
console.log(greet.description);



