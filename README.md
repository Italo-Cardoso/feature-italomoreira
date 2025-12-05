* IMPORTANTE: Não inicie este desafio sem autorização. O desafio só poderá ser iniciado no dia e horário agendado via Google Meet. Entre em contato via email ou whatsapp:
  - administrativo@infinixassessoria.com.br
  - (21) 99515-2411

# CONTENT NAVIGATOR

## Sobre
**Stack**: React Native (Expo Go) + TypeScript + Axios
**API Externa**: RandomUser.me (https://randomuser.me/)
**Escopo**: Um catálogo de contatos de duas telas.

## Requisitos Essenciais (Timebox 4h)

1. Navegação (Expo Router):
    - Configure rotas e navegação.
    - Defina duas telas: *Home* (para a lista) e *Profile* (para os detalhes)
2. Consumo de API:
    - Use **axios** para buscar uma lista de 20 usuários da API.
    - A chamada deve ser feita na tela Home.
3. Tipagem (TypeScript): Crie interfaces para a estrutura de dados complexa deo RandomUser. O uso de any deve ser evitado.
4. Tela 1: Home (/) — A lista de contatos
    - Exiba um indicador de carregamento enquanto a API carrega.
    - Renderize os 20 usuários em uma *FlatList*.
    - Cada item da lista deve ser um botão exibindo foto e o nome completo do usuário.
5. Tela 2: Profile (/profile/:username) - O perfil do contato
    - Ao clicar em um item na lista, o aplicativo deve navegar para a tela Profile.
    - O objeto completo do usuário (item) deve ser passado como parâmetro de rota para a tela Profile. *
    - A tela Profile deve receeber o parâmetro.
    - Exiba informações detalhadas: foto (grande), nome completo, e-mail, telefone e localização (cidade, estado).

#### Bônus (Desejáveis):
    - Atualização: Implemente uma funcionalidade de atualização na lista, para buscar uma nova lista aleatória de 20 novos usuários.
    - Persistência: Use expo-secure-store para criar uma função de "Favoritos". O usuário deve poder marcar um contato como favorito na tela de detalhes, e um ícone de "estrela" deve aparecer ao lado desse contato na lista na tela Home.
    - Hospedagem (Expo Go): Publique o projeto no Expo Go e coloque o link/QR code no README-CANDIDATO.md para fácil teste em um dispositivo real.
    - * Cache: Adicione uma solução para guardar os dados recebidos da API em cache, acessando-os posteriormente na tela Profile.

# Rubrica de Avaliação

| Dimensão Avaliada                        | Peso  | Pontuação (1-5) | Descrição da Avaliação (O que procurar)                                                                                                                                                                                                 |
|------------------------------------------|-------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **1. Funcionalidade (Requisitos Essenciais)** | 40%  | [1-5]           | **5 (Excelente):** Cumpriu 100% dos requisitos essenciais. A aplicação roda de primeira, sem bugs óbvios. Trata estados de loading/error.<br>**3 (Satisfatório):** Cumpriu a maioria (80%+) dos requisitos. Funcionalidade principal funciona, mas com bugs menores.<br>**1 (Inaceitável):** Não roda ou a funcionalidade principal está quebrada. O avaliador não consegue testar a solução. |
| **2. Qualidade de Código e Estrutura**       | 25%  | [1-5]           | **5 (Excelente):** Código limpo, legível e idiomático. Segue princípios (ex: DRY). Estrutura de pastas lógica e escalável. Tipagem (TS) útil e precisa. Separação clara de responsabilidades.<br>**3 (Satisfatório):** Código funciona, mas com repetição ou "code smells". Estrutura de pastas aceitável, mas confusa. Tipagem usada com alguns `any`.<br>**1 (Inaceitável):** "Código espaguete". Variáveis ruins. Lógica de negócio misturada com UI. "Sopa de arquivos" na raiz. |
| **3. Processo e Comunicação (Git & README)** | 25%  | [1-5]           | **5 (Excelente):** Commits atômicos, frequentes e bem descritos. PR bem escrito. README completo com setup e explicações de design.<br>**3 (Satisfatório):** Usa Git, mas commits grandes (ex: "implementa home e função de agendar tarefas e remove var desnecessária"). README mínimo com instruções básicas.<br>**1 (Inaceitável):** Um único commit ("final"). Nenhum README ou instruções. Demonstra falta de profissionalismo e comunicação. |
| **4. Bônus e Resolução de Problemas**        | 10%  | [1-5]           | **5 (Excelente):** Implementou requisitos bônus funcionando. README explica como utilizar.<br>**3 (Satisfatório):** Tentou implementar bônus, mas não funcionou. README explica falha e plano.<br>**1 (Inaceitável):** Ignorou bônus ou implementou com falhas e sem explicação no README. |


## Instruções sobre "README-CANDIDATO" (Timebox 30min):
Preencha este arquivo com informações claras e concisas, separadas pelas seguintes seções:

#### Seção 1: Instruções para rodar
- Quais variáveis de ambiente são necessárias?
- Como instalar dependências?
- Como rodar o projeto?

#### Seção 2: Decisões de design
- Por que você escolheu essa estrutura de pastas?
- Qual foi a maior dificuldade que você encontrou e como superou?
- O que você não teve tempo de fazer (dentro do timebox) e como você faria se tivesse mais tempo?

#### Seção 3: Link para Deploy (Bônus)
- Cole aqui o link do projeto hospedado.

#### Seção final: Recomendações
- Escreva aqui dicas, melhorias e recomendações sobre este desafio.

## Considerações finais:
Este desafio não foi pensado para encontrar quem o finaliza 100% ou quem o termina mais rápido. Estamos buscando um desenvolvedor sério, que saiba como desenvolver soluções mesmo que para apenas 50% do projeto. Não queremos nenhum dev que dependa 100% de IA ou de terceiros, mas sim aquele que sabe priorizar, desenvolver e pesquisar.
