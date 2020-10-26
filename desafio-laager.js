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


    // Adicionar ao início da lista
    adcPrimeiro(data) {
        this.head = new Node(data, this.head);

        this.size++;
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

    // Adicionar por posição
    adcPorIndex(data, index) {
        // Verificando se a posição existe no intervalo
        if (index > 0 && index > this.size) {
            return;
        }

        // Se for a primeira posição [0]
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const node = new Node(data);
        let current, previous;

        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current; // Nó anterior
            count++;
            current = current.next; // Próximo Nó
        }

        node.next = current;
        previous.next = node;

        this.size++; // Adicionando 1 ao tamanho atual
    }

    // Limpar lista
    limparLista() {
        this.head = null;
        this.size = 0;
    }

    //Printar lista
    printLista() {
            let current = this.head;

            while (current) {
                console.log(current.data);
                current = current.next;
            }
        }
        // Invertendo um nó
    inverteNo(node, prev) {
            let newNode = new Node(node.data, prev);
            if (node.next) {
                return this.inverteNo(node.next, newNode);
            } else {
                return newNode;
            }
        }
        // Retorna a linked-list invertida
    inverteLista() {
        let current = this.inverteNo(this.head, null);


        while (current) {
            console.log(current.data);
            current = current.next;
        }
        return this.inverteNo(this.head, null);

    }


}
// Tratando data e hora
function fData(data = new Date(2005, 1, 1, 14, 00, 00)) {
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    return dia + '/' + mes + '/' + ano + ' ' + hora + ':' + 0 + minutos + ':' + 0 + segundos
}

let lista = new LinkedList();


lista.adcFinal(100);
lista.adcFinal(200);
lista.adcFinal(300);
lista.adcFinal(400);

lista.printLista();
lista.inverteLista();