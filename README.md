# SIMPLE RESOURCE API

## Sobre
**Stack**: React Native (Expo Go) + TypeScript + Axios
**API Externa**: RandomUser.me (https://randomuser.me/)
**Escopo**: Um catálogo de contatos de duas telas.

## Requisitos Essenciais (Timebox 4h)

1. Navegação (React Navigation):
    - Configure um *NavigationContainer* e um *createNativeStackNavigator*
    - Defina duas telas: *Home* (para a lista) e *Profile* (para os detalhes)
2. Consumo de API:
    - Use **axios** para buscar uma lista de 20 usuários da API.
    - A chamada deve ser feita na tela Home.
3. Tipagem (TypeScript): Crie interfaces para a estrutura de dados complexa deo RandomUser. O uso de any deve ser evitado.
4. Tela 1: (Home) - A lista de contatos
    - Exiba um indicador de carregamento enquanto a API carrega.
    - Renderize os 20 usuários em uma *FlatList*.
    - Cada item da lista deve ser um botão exibindo foto e o nome completo do usuário.
5. Tela 2: Detalhes (Profile) - O perfil do contato
    - Ao clicar em um item na lista, o aplicativo deve navegar para a tela Profile.
    - O objeto completo do usuário (item) deve ser passado como parâmetro de rota para a tela Profile. *
    - A tela Profile deve receeber o parâmetro.
    - Exiba informações detalhadas: foto (grande), nome completo, e-mail, telefone e localização (cidade, estado).

#### Bônus (Desejáveis):
    - Atualização: Implemente uma funcionalidade de atualização na lista, para buscar uma nova lista aleatória de 20 novos usuários.
    - Persistência: Use expo-secure-store para criar uma função de "Favoritos". O usuário deve poder marcar um contato como favorito na tela de detalhes, e um ícone de "estrela" deve aparecer ao lado desse contato na lista na tela Home.
    - Hospedagem (Expo Go): Publique o projeto no Expo Go e coloque o link/QR code no README-CANDIDATO.md para fácil teste em um dispositivo real.
    - * Cache: Adicione uma solução para guardar os dados recebidos da API em cache, acessando-os posteriormente na tela Profile.

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
