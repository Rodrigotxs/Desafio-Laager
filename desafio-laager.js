//Classe Nó
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

//Linked-list
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }


    // Adicionar ao final da lista
    adcFinal(data) {
        let node = new Node(data);

        if (!this.head) {
            this.head = node;
        } else {
            var current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    //Printar lista
    printLista() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Converter objetos em strings
    toStringMethod() {
        let current = this.head;
        let j = [];

        for (let i = 0; i < this.size; i++) {
            j.push(current.data.toString());
            console.log(j);
            current = current.next;
        }
        return j;
    }

    // Inverte a lista
    inverteLista() {
            let aux = null; // Ponteiro auxiliar para inversão de valores
            let current = this.head;
            let prox = current.next;

            while (current != null) {
                current.next = aux;
                aux = current;
                current = prox;
                if (prox != null) {
                    prox = prox.next;
                }
                this.head = aux;
            }
        }
        // Retornar o Head a lista
    getHead() {
        let valHead = this.head.data;
        return valHead;
    }

}