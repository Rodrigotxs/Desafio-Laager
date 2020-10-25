//Lista ligada
function ListaLigada() {

    let head = null
    let length = 0

    const Node = (value) => {
        return {
            value,
            next: null
        }
    }

    const add = (value) => {
        if (!head) {
            head = Node(value)
            length++
            return head

        }
        let node = head
        while (node.next) {
            node = node.next
        }
        node.next = Node(value)
        length++
        return node.next
    }

    return {
        length: () => length,
        add: (value) => add(value),
        print: () => console.log(head)
    }
}

function fData(data = new Date(2005, 1, 1, 14, 00, 00)) {
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    return dia + '/' + mes + '/' + ano + ' ' + hora + ':' + 0 + minutos + ':' + 0 + segundos
}
console.log(fData())

const lista = ListaLigada()
lista.add("Oi")
lista.add(5)
lista.add("Oi")
lista.add(5)
lista.add("Oi")
lista.add(5)
lista.add(fData())
lista.add(1)
lista.add("Tchau")
lista.print()