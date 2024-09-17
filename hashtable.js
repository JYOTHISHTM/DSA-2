// // basic implementation



// class Hashtable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }

//     hash(key){
//         let total=0
//         for(var i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total%this.size
//     }

//     set(key,value){
//         let index=this.hash(key)
//         this.table[index]=value
//     }

//     get(key){
//         let index=this.hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         let index=this.hash(key)
//          this.table[index]=undefined
//     }
//     display(){
//         for(var i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);

//             }
//         }
//     }
// }

// const Hashtable1=new Hashtable(10)

// Hashtable1.set("name","jothish")
// Hashtable1.set("age","20")
// Hashtable1.display()
// Hashtable1.remove("name")
// Hashtable1.remove("age")
// Hashtable1.display()







// when collition occurs


class Hashtable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value) {
        let index = this.hash(key)
        let bucket = this.table[index]

        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }

    get(key) {
        let index = this.hash(key)
        const bucket = this.table[index]

        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    remove(key) {
        let index = this.hash(key)
        const bucket = this.table[index]

        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i])
            }
        }
    }
}

const Hashtable1 = new Hashtable(10)

Hashtable1.set("name", "jothish")
Hashtable1.set("age", 20)  // Store age as a number, not a string
Hashtable1.display()
Hashtable1.set("naem", "jas")
Hashtable1.remove("name")
Hashtable1.display()
