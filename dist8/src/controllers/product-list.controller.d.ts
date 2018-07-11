import { ProductRepository } from "../repositories/product.repository";
import { Product } from "../models/product";
import { MenuRepository } from "../repositories/menu.repository";
import { Menu } from "../models/menu";
export declare class ProductListController {
    private productRepo;
    private menuRepo;
    constructor(productRepo: ProductRepository, menuRepo: MenuRepository);
    createProduct(product: Product, menu: Menu): Promise<Product>;
    findProduct(name: string): Promise<Array<Product>>;
    getAllUsers(): Promise<Array<Product>>;
}
