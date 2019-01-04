const merge = (a, b) => {
  const merged = []
  let i = 0
  let j = 0
  
  while (a[i] || b[j]) {
    if (!b[j] || a[i] < b[j]) {
      merged.push(a[i])
      i += 1
    } else {
      merged.push(b[j])
      j += 1
    }
  }

  return merged
}

const mergeSort = (arr) => {
  if (arr.length === 1) return arr

  const left = arr.slice(0, Math.round(arr.length / 2))
  const right = arr.slice(Math.round(arr.length / 2))

  const dividedLeft = mergeSort(left)
  const dividedRight = mergeSort(right)

  return merge(dividedLeft, dividedRight)
}

const mergeAndCountInversions = (a, b, acc = 0) => {
  const merged = []
  let i = 0
  let j = 0
  
  while (a[i] || b[j]) {
    if (!b[j] || a[i] < b[j]) {
      merged.push(a[i])
      i += 1
    } else {
      merged.push(b[j])
      j += 1
      acc += a.slice(i).length
    }
  }

  return [merged, acc]
}

const mergeSortAndCountInversions = (arr, acc = 0) => {
  if (arr.length === 1) return [arr, acc]

  const left = arr.slice(0, Math.round(arr.length / 2))
  const right = arr.slice(Math.round(arr.length / 2))

  const [dividedLeft, leftInversions] = mergeSortAndCountInversions(left)
  const [dividedRight, rightInversions] = mergeSortAndCountInversions(right)

  return mergeAndCountInversions(dividedLeft, dividedRight, leftInversions + rightInversions)
}

console.log(mergeSortAndCountInversions([6,5,4,3,2,1]))
