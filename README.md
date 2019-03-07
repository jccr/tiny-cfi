# Tiny CFI

Generate a minimal CFI for a target node, with only the DOM as a dependency.

## Caveats

A bunch. This is very rudimentary.
Only the element steps are generated. 
No ranges, no text offsets, no ID assertions.

## Usage

```
generateCfiSteps(target, root)
```

