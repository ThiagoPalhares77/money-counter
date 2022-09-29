import { MagnifyingGlass } from 'phosphor-react'
import { SeachFormContainer } from './styles'

export function SeachForm() {
  return (
    <SeachFormContainer>
      <input type="text" placeholder="Busque por transações" />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SeachFormContainer>
  )
}
