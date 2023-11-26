---
to: src/components/<%= dir %>/<%= h.changeCase.pascal(name) %>/components/Container.tsx
---
import <%= h.changeCase.pascal(name) %> from './<%= h.changeCase.pascal(name) %>'

interface Props {

}

const Container = (props: Props) => {
  return (
    <<%= h.changeCase.pascal(name) %> {...props} />
  )
}

export default Container;