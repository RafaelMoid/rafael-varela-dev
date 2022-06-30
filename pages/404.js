import Link from '../src/components/Link';

export default function Page404() {
    return (
        <div>
            <h1>Erro 404</h1>
            <h3>
                Esse caminho não leva a nenhuma página de nosso site, mas isso não quer dizer que você está perdido, muitos caminhos tidos
                como errados
            </h3>
            <h3>
                são na verdade caminhos ainda não desbravados, então siga confiante meu querido(a) desbravador(a) na sua jornada de inovação
            </h3>
            <p>Porém se você quiser continuar conferindo meu conteudo é só clicar no link abaixo :)</p>
            <Link href="/" passHref>
                Ir para a HOME
            </Link>
        </div>
    )
}