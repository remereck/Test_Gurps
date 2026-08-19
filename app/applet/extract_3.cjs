const fs = require('fs');
const m1 = fs.readFileSync('applet/raw_data1.md', 'utf8');
const m2 = fs.readFileSync('applet/raw_data2.md', 'utf8');
const m3 = fs.readFileSync('applet/raw_data3.md', 'utf8');
function extractPathway(markdown, pathwayName) {
    const lines = markdown.split('\n');
    let inSection = false;
    let result = [];
    for (let line of lines) {
        if (line.includes('###### **Sequence') && line.includes(pathwayName)) {
            inSection = true;
            result.push(line);
            continue;
        } else if (inSection && line.includes('###### **Sequence')) {
            inSection = false;
        }
        if (inSection) result.push(line);
    }
    return result.join('\n');
}

console.log("================ DEMONESS ================");
console.log("=== SEQ 9 ==="); console.log(extractPathway(m1, "Demoness Pathway"));
console.log("=== SEQ 8 ==="); console.log(extractPathway(m2, "Demoness Pathway"));
console.log("=== SEQ 7 ==="); console.log(extractPathway(m3, "Demoness Pathway"));

console.log("\n================ RED PRIEST ================");
console.log("=== SEQ 9 ==="); console.log(extractPathway(m1, "Red Priest Pathway"));
console.log("=== SEQ 8 ==="); console.log(extractPathway(m2, "Red Priest Pathway"));
console.log("=== SEQ 7 ==="); console.log(extractPathway(m3, "Red Priest Pathway"));

console.log("\n================ HERMIT ================");
console.log("=== SEQ 9 ==="); console.log(extractPathway(m1, "Hermit Pathway"));
console.log("=== SEQ 8 ==="); console.log(extractPathway(m2, "Hermit Pathway"));
console.log("=== SEQ 7 ==="); console.log(extractPathway(m3, "Hermit Pathway"));
