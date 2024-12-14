let memoryBlocks = [
    { size: 100, free: true },
    { size: 200, free: true },
    { size: 50, free: true },
    { size: 300, free: true },
    { size: 150, free: true }

];

const clearAllocatedMemory = () => {
    
    memoryBlocks = [
        { size: 100, free: true },
        { size: 200, free: true },
        { size: 50, free: true },
        { size: 300, free: true },
        { size: 150, free: true }
    ];

}
const inputValitaion = (input) => {
    if (input > 0) {
        return true
    } else {
        return false
    }
}
// Function to display memory blocks
const displayMemoryBlocks = () => {
    const memoryContainer = document.getElementById('memoryBlocks');
    memoryContainer.innerHTML = '';
    memoryBlocks.forEach((block, index) => {
        const blockDiv = document.createElement('div');
        blockDiv.classList.add('memory-block', block.free ? 'free' : 'allocated');
        blockDiv.textContent = `Block ${index + 1}: ${block.size}KB`;
        blockDiv.dataset.index = index;
        memoryContainer.appendChild(blockDiv);
    });
}

const addLable = () =>{
    
}

// First-Fit memory allocation algorithm
const firstFitAllocate = (processSize) => {
    for (let i = 0; i < memoryBlocks.length; i++) {
        console.log("memory block before :", memoryBlocks[i])
        if (memoryBlocks[i].free && memoryBlocks[i].size >= processSize) {
            console.log("memory block-------------------- :", memoryBlocks[i])
            memoryBlocks[i].size -= processSize;
            
            return i; // Allocation successful
        }
    }
    return -1; // No suitable block found
}

const logger = () =>{

}
// Event listener for process allocation form
document.getElementById('allocateForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const processSize = parseInt(document.getElementById('processSize').value);
    const blockIndex = firstFitAllocate(processSize);

    const log = document.getElementById('log');
    const logItem = document.createElement('li');
    logItem.classList.add('list-group-item');
    if (blockIndex !== -1) {
        logItem.textContent = `Process of size ${processSize}KB allocated to Block ${blockIndex + 1}.`;
    } else {
        logItem.textContent = `Process of size ${processSize}KB could not be allocated. No suitable block.`;
    }
    log.appendChild(logItem);

    displayMemoryBlocks();
});

// Initialize memory blocks display
displayMemoryBlocks();