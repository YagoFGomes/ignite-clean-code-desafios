// Boleanos

const user = {
  name: "Diego Fernandes",
  height: 190,
  hasTicket: true,
};

const necessaryHeight = 130;

const currentHour = new Date().getHours();

const parkIsOpen = currentHour > 9 && currentHour < 18;

if (!parkIsOpen) {
  throw new Error("O parque está fechado!");
}

const userHasTicket = user.hasTicket;

if (!userHasTicket) {
  throw new Error("O Diego não possui um bilhete para entrar no parque!");
}

const userHasRequiredHeight = user.height > necessaryHeight;

if (!userHasRequiredHeight) {
  throw new Error("O Diego não pode entrar no brinquedo!");
}

console.log("O Diego se divertiu muito! :)");
