function delayedCall(fn: () => void): void {
    setTimeout(fn, 2000);
}

delayedCall(() => {
    console.log("Called after 2 seconds");
});