import { useEffect, useRef } from 'react';

// Standard Galactic Alphabet & Elder Occult Runes used in Minecraft Enchantment Table / §k
const SGA_RUNES = [
  'ᔑ', 'ʖ', 'ᓵ', '↸', 'ᒷ', '⎓', '⊣', '⍑', '╎', '⋮', 'ꖌ', 'ꖎ', 'ᒲ', 'リ', '𝙹', 'ⅰ', 'ᑑ', '∷', 'ᓭ', 'ℸ', '⚍', '⍊', 'ᑑ', '̇/', '||', '⨅',
  'ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚾ', 'ᛁ', 'ᛃ', 'ᛈ', 'ᛉ', 'ᛋ', 'ᛏ', 'ᛒ', 'ᛖ', 'ᛗ', 'ᛚ', 'ᛜ', 'ᛞ', 'ᛟ',
  '∆', '∇', '⊸', '⍝', '⌖', '⌗', '⌘', '⎈', '⎊', '⍟', '⍲', '⍱', '⍬', '⍭'
];

function getRandomRune(): string {
  return SGA_RUNES[Math.floor(Math.random() * SGA_RUNES.length)];
}

function scrambleString(str: string): string {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === ' ' || ch === '\n' || ch === '\t' || ch === '\r') {
      res += ch;
    } else {
      res += getRandomRune();
    }
  }
  return res;
}

export function useEnchantmentTableObfuscation(isLostControl: boolean) {
  const originalNodesMap = useRef<Map<Text, string>>(new Map());

  useEffect(() => {
    if (!isLostControl) {
      // Restore all original text
      originalNodesMap.current.forEach((origText, node) => {
        try {
          if (node.isConnected) {
            node.nodeValue = origText;
          }
        } catch {
          // ignore
        }
      });
      originalNodesMap.current.clear();
      return;
    }

    // Interval to constantly scramble text nodes like Minecraft §k / Enchantment Table
    const interval = setInterval(() => {
      const zones = document.querySelectorAll('.obfuscate-zone');
      
      zones.forEach(zone => {
        // Collect all text nodes inside this zone that are NOT inside .keep-readable
        const walker = document.createTreeWalker(
          zone,
          NodeFilter.SHOW_TEXT,
          {
            acceptNode(node) {
              const parent = node.parentElement;
              if (!parent) return NodeFilter.FILTER_REJECT;
              if (parent.closest('.keep-readable')) return NodeFilter.FILTER_REJECT;
              if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_SKIP;
              return NodeFilter.FILTER_ACCEPT;
            }
          }
        );

        let currentNode: Node | null = walker.nextNode();
        while (currentNode) {
          const textNode = currentNode as Text;
          if (!originalNodesMap.current.has(textNode)) {
            originalNodesMap.current.set(textNode, textNode.nodeValue || '');
          }
          
          const orig = originalNodesMap.current.get(textNode) || textNode.nodeValue || '';
          textNode.nodeValue = scrambleString(orig);

          currentNode = walker.nextNode();
        }
      });
    }, 70);

    return () => {
      clearInterval(interval);
      originalNodesMap.current.forEach((origText, node) => {
        try {
          if (node.isConnected) {
            node.nodeValue = origText;
          }
        } catch {
          // ignore
        }
      });
      originalNodesMap.current.clear();
    };
  }, [isLostControl]);
}
