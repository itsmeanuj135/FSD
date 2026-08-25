import readline from "readline/promises";
import { stdin, stdout } from "process";
import { writeFile, readFile, appendFile } from "fs/promises";

// Database using file starts
const FILE = "product.json";

const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
};

const saveCart = async (cart) => {
  await writeFile(FILE, JSON.stringify(cart, null, 2));
};
const addToCart = async (product) => {
  const cart = await getCart();
  const isFoundInCart = cart.find((item) => item.id === product.id);
  if (isFoundInCart) {
    isFoundInCart.quantity += 1;
  } else cart.push(product);
  await saveCart(cart);
  console.log(`${product.name} added/updated to 🛒`);
};
const displayCart = async () => {
  const cart = await getCart();
  if (cart.length === 0) {
    console.log("🛒is empty");
    return;
  }
  console.table(cart);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  console.log(`Total payable amount Rs. ${total}`);
};

const main = async () => {
  let choice;
  const cin = readline.createInterface({ input: stdin, output: stdout });
  do {
    stdout.clearLine();
    console.log("\nWelcome to amazone shoping 🛒");
    console.log("1.........Show Cart");
    console.log("2.........Add Product");
    console.log("3.........Remove Product");
    console.log("4.........Update Quantity");
    console.log("5.........Exit");
    choice = await cin.question("Enter your choice:");

    switch (Number(choice)) {
      case 1:
        displayCart();
        break;
      case 2:
        const item = await cin.question("Enter id,name ,price,quantity: ");
        const [id, name, price, quantity] = item
          .split(",")
          .map((p) => p.trim());
        await addToCart({
          id: Number(id),
          name,
          price: Number(price),
          quantity: Number(quantity),
        });
        break;
      case 3:
        console.log("remove Product");
        break;
      case 4:
        console.log("update Quantity");
        break;
      case 5:
        console.log("checkout");
        break;
      default:
        console.log("Invalid choice");
    }
  } while (choice != 5);
  cin.close();
};
main();
