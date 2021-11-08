/**
 * Задание 5 - Власть банков
 * В этой задаче вам нужно реализовать класс контроллер
 * 1. registerVault(): ISecureVaultRequisites - регистрирует хранилище в банке
 * 2. proceedContract(IContract): void - проводит договор между счетами
 * 3. Класс контроллера должен быть реализацией паттерна Singleton
 *
 * Хранилища должны быть сохранены в массив vaultStore: Vault[]
 */
import { IContract } from "../task_4";
import { Vault } from "../task_3";

export class BankController {

    private static _instance: BankController;
    private _vaults: Set<Vault>;

    private constructor() {
        this._vaults = new Set<Vault>();
    }

    public static getController() {
        if (!BankController._instance) {
            BankController._instance = new BankController();
        }

        return BankController._instance;
    }


    public registerVault() {
        const vault = new Vault();
        this._vaults.add(vault);

        return vault;
    }

    public proceedContract(contract: IContract) {
        let sender: Vault;
        let receiver: Vault;

        this._vaults.forEach(vault =>
            vault.id === contract.sender.id ? sender = vault
                : vault.id === contract.receiver.id ? receiver = vault : undefined);

        contract.signAndTransfer();
        try {
            sender.transfer(contract.value, receiver);
        } catch (e) {
            return contract.rejectTransfer();
        }

        contract.closeTransfer();
    }
}