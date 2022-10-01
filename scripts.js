const listaDeTarefas= {
    data(){
        return {
            lista:[],
            novoItem : { tarefa: '', done: false}
            
        }
     
    },
    methods: {
        adicionarItem(){
            if(this.novoItem.tarefa){
                this.lista.push(this.novoItem)
                this.novoItem = { tarefa: '', done: false}
                localStorage.setItem("tarefas", JSON.stringify(this.lista));
            } else{
                alert('Digite algum valor')
            }
        },

        storeTarefas(){
            localStorage.setItem("tarefas", JSON.stringify(this.lista));
        }
     
    },
    created(){
        this.lista = localStorage.getItem("tarefas") ? JSON.parse(localStorage.getItem("tarefas")) : this.lista
    },
    // updated(){
    //     localStorage.setItem("tarefas", JSON.stringify(this.lista));
    // }
}

Vue.createApp(listaDeTarefas).mount('#app')