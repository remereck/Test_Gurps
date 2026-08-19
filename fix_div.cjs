const fs = require('fs');
let content = fs.readFileSync('src/components/SkillPanel.tsx', 'utf8');
content = content.replace("        </div></div>\n      </section>", "        </div>\n      </section>");
fs.writeFileSync('src/components/SkillPanel.tsx', content);
