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

## Example

Given the HTML:

```
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <div id="div-2">
      <p id="p-2">
        Hello world
      </p>
      <div></div>
      <div id="div-6"></div>
      <div></div>
    </div>
  </body>
</html>
```

Running `npm i && npm test` should print out `/4/2/6`

Refer to `main.js` as a code example.
