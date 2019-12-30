function findKey(object, value) {

        for (let key in object)
            if (object[key] === value) return key;
    
        return "key is not found";
    }
    
    const object = { id_1: "apple", id_2: "pear", id_3: "peach" };
    
    console.log(findKey(object, "pear"));
    }
}