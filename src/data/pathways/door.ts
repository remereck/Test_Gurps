import { Pathway } from '../types';

export const doorPathway: Pathway = {
  id: 'door',
  name: { en: 'Door Pathway', es: 'Senda de Puerta' },
  sequences: [
    {
      level: 9,
      statBonuses: [{ stat: 'SPI', bonus: 5 }],
      skillBonuses: [
        { skillId: 'running', bonus: 3 },
        { skillId: 'lockpicking', bonus: 6 },
        { skillId: 'climbing', bonus: 3 },
        { skillId: 'ritualistic_magic', bonus: 2 }
      ],
      abilities: [
        {
          id: 'door_seq9_opening',
          name: { en: 'Door Opening', es: 'Apertura de Puerta' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Open any mundane lock by touch and will. Warded doors cost 1 SPI. Attack bodily doors for 1d-1 cut. Free Escape +2 vs mundane restraints.',
            es: 'Abre cualquier cerradura mundana al tacto. Puertas protegidas cuestan 1 SPI. Ataca puertas corporales por 1d-1 de corte. Escape gratis +2 vs restricciones mundanas.'
          }
        }
      ]
    },
    {
      level: 8,
      statBonuses: [{ stat: 'DX', bonus: 1 }, { stat: 'IQ', bonus: 1 }, { stat: 'SPI', bonus: 2 }],
      skillBonuses: [
        { skillId: 'sleight_of_hand', bonus: 4 },
        { skillId: 'escape', bonus: 3 },
        { skillId: 'acrobatics', bonus: 2 }
      ],
      abilities: [
        {
          id: 'door_seq8_spellcasting',
          name: { en: 'Trickmaster Spellcasting', es: 'Hechizos de Maestro de Trucos' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Cast tricks (1 SPI each, 10m range): Flash (blind), Electric Shock (stun), Freezing (cold), Burning, Wind, Fog, Tumble, Loud Noise, Black Curtain, Escape Trick, Gas Transfer, Object Bounce.',
            es: 'Lanza trucos (1 SPI, rango 10m): Destello (ciega), Choque Eléctrico (aturde), Congelación, Quemadura, Viento, Niebla, Caída, Ruido Fuerte, Cortina Negra, Truco de Escape, Transferencia de Gas, Rebote de Objetos.'
          }
        },
        {
          id: 'door_seq8_opening',
          replaces: 'door_seq9_opening',
          name: { en: 'Door Opening+', es: 'Apertura de Puerta+' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Door Opening: Open any mundane lock by touch and will. Warded doors cost 1 SPI. Attack bodily doors for 1d-1 cut. Free Escape +2 vs mundane restraints, Door Opening+ Open warded doors {{without a roll}}, attack bodily doors for {{1d+1}} cut, and Free Escape {{+4}} vs mundane restraints.',
            es: 'Apertura de Puerta: Abre cualquier cerradura mundana al tacto. Puertas protegidas cuestan 1 SPI. Ataca puertas corporales por 1d-1 de corte. Escape gratis +2 vs restricciones mundanas, Apertura de Puerta+ Abre puertas protegidas {{sin tirar dados}}, el ataque de puerta corporal inflige {{1d+1}} de corte, y el bono de escape aumenta a {{+4}}.'
          }
        }
      ]
    },
    {
      level: 7,
      statBonuses: [{ stat: 'IQ', bonus: 2 }, { stat: 'SPI', bonus: 3 }],
      skillBonuses: [
        { skillId: 'astrology', bonus: 4 },
        { skillId: 'ritualistic_magic', bonus: 3 }
      ],
      abilities: [
        {
          id: 'door_seq7_crystal',
          name: { en: 'Crystal Ball Focus', es: 'Foco de Bola de Cristal' },
          type: 'passive',
          description: {
            en: 'When using a crystal ball, gain +2 to Ritualistic Magic (divination) rolls.',
            es: 'Al usar una bola de cristal, gana +2 a las tiradas de Magia Ritualística (adivinación).'
          }
        },
        {
          id: 'door_seq7_interference',
          name: { en: 'Interference', es: 'Interferencia' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Disrupt divination attempts against you. Roll SPI vs opponent. Success blurs their divination, critical success blocks it.',
            es: 'Interrumpe intentos de adivinación. Tira SPI vs oponente. El éxito nubla su adivinación, el éxito crítico la bloquea.'
          }
        },
        {
          id: 'door_seq7_opening',
          replaces: 'door_seq8_opening',
          name: { en: 'Door Opening++', es: 'Apertura de Puerta++' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Door Opening+: Open warded doors without a roll, attack bodily doors for 1d+1 cut, and Free Escape +4 vs mundane restraints, Door Opening++ Bring up to {{3 additional people}} through a door or spatial obstacle. Usable {{twice per scene}}.',
            es: 'Apertura de Puerta+: Abre puertas protegidas sin tirar dados, ataque a puerta corporal inflige 1d+1, escape +4 vs restricciones, Apertura de Puerta++ Lleva hasta {{3 personas adicionales}} a través de una puerta u obstáculo espacial. Utilizable {{dos veces por escena}}.'
          }
        },
        {
          id: 'door_seq7_peephole',
          name: { en: 'Peephole', es: 'Mirilla' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Creates a palm-sized invisible peephole through up to 1 meter of wood/stone for 1 minute.',
            es: 'Crea una mirilla invisible del tamaño de la palma a través de hasta 1 metro de madera/piedra durante 1 minuto.'
          }
        },
        {
          id: 'door_seq7_spellcasting',
          replaces: 'door_seq8_spellcasting',
          name: { en: 'Trickmaster Spellcasting+', es: 'Hechizos de Maestro de Trucos+' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Trickmaster Spellcasting: Cast tricks (1 SPI each, 10m range): Flash (blind), Electric Shock (stun), Freezing (cold), Burning, Wind, Fog, Tumble, Loud Noise, Black Curtain, Escape Trick, Gas Transfer, Object Bounce, Trickmaster Spellcasting+ Spells range {{20m}}, Flash/Fog radii {{+2m}}, Escape Trick distance {{10m}}, and Gas Transfer {{30m}}.',
            es: 'Hechizos de Maestro de Trucos: Lanza trucos (1 SPI, rango 10m): Destello (ciega), Choque Eléctrico (aturde), Congelación, Quemadura, Viento, Niebla, Caída, Ruido Fuerte, Cortina Negra, Truco de Escape, Transferencia de Gas, Rebote de Objetos, Hechizos de Maestro de Trucos+ Rango de hechizos a {{20m}}, radios de Destello/Niebla {{+2m}}, Truco de Escape {{10m}}, y Transferencia de Gas a {{30m}}.'
          }
        }
      ]
    },
    {
      level: 6,
      statBonuses: [
        { stat: 'SPI', bonus: 3 },
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 }
      ],
      skillBonuses: [],
      abilities: [
        {
          id: 'door_seq6_main',
          name: { en: 'Scribe', es: 'Escriba' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Can record and replicate Beyonder abilities.',
            es: 'Puede registrar y replicar habilidades de Beyonder.'
          }
        }
      ]
    }
  ]
};
