/*
 * Concept: patterns / Observer
 * Run: node "9. patterns/1. observer.js"
 *
 * CONCEPT: The Observer pattern lets objects subscribe to state changes on a
 *   subject. When the subject updates, it notifies all active subscribers.
 *   Subscribers receive an unsubscribe function to stop receiving updates.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   Mom and Son subscribe to IcecreamStoreObservable. The first set() notifies
 *   both. Mom then unsubscribes — the second set() only notifies Son.
 */

class IcecreamStoreObservable {
    observerList = {}
    servings = []

    constructor(servings) {
        this.servings = servings
    }

    subscribe(label, fn) {
        if (label && !this.observerList[label]) {
            this.observerList[label] = fn
            console.log(`${label} subscribed to store, thanks!`)
        } else if (label) {
            console.log(`${label} we got you already!`)
        } else {
            console.log(`Name please?`)
        }

        return () => {
            delete this.observerList[label]
            console.log(`${label} we will miss you...`)
        }
    }

    set(servings) {
        this.servings = servings
        for (let i in this.observerList) {
            this.observerList[i](servings)
        }
    }
}

const observable = new IcecreamStoreObservable(["cone", "cup", "packs"])

const unsubMom = observable.subscribe('Mom', (updatedValue) => {
    console.log("mom", updatedValue)
})

const unsubSon = observable.subscribe('Son', (updatedValue) => {
    console.log("me", updatedValue)
})

observable.set([["cone", "cup", "packs", "halfpacks"]])

unsubMom();

observable.set([["cone", "cup"]])
