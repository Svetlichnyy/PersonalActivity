export default class LruCacheManager {
    constructor(capacity) {
        this.maxCapacity = capacity;
        this.cache = [];
        this.currentCapacity = {};
    }
    put(index,value,lifeTime){
        this.ttlCheck()
        if (this.currentCapacity[index]){
            this.cache.splice(this.cache.findIndex(i => i === this.currentCapacity[index]),1);
        }
        const ttl=new Date(Date.now()+lifeTime*60000)
        this.cache.push({index,value,ttl});
        this.currentCapacity[index] = this.cache[this.cache.length-1];
        if (this.cache.length > this.maxCapacity){
            delete this.currentCapacity[this.cache[0].index];
            this.cache.shift();
        }
    };
    get(index){
        this.ttlCheck();
        if (this.currentCapacity[index]) {
            return this.currentCapacity[index];
        } else {
            return 0;
        }
    }
    ttlCheck(){
        this.cache.map((data, i) => {
            if (data.ttl < new Date()){
                delete this.currentCapacity[data.index];
                this.cache.splice(i,1);
            }
        })
    }
}
const run = new LruCacheManager(5);

// run.put(1,1337,0.5);
// run.put(2,42,0.8);
// run.put(3,1488,0.9);
// run.put(4,228,1);
// run.put(5,1703,1.1);
// run.put(6,2000,1.2);
// run.put(2,47,1.3);
// run.put(7,6,1.4);
// setInterval(() => run.get(1),100)
