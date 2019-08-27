
import { handleStatus, log, timeoutPromise, delay, retry} from './utils/promise-helpers.js'
import './utils/array-helpers.js'
import { notasService as service} from './nota/service.js'
import {takeUntil, debounceTime, partialize, pipe} from './utils/operators.js'
import { EventEmitter } from './utils/event-emitter.js'


const partialTake =   partialize(takeUntil,3)
const partialDebounceTime = partialize(debounceTime,500)

const operations = pipe(
    partialTake,
    partialDebounceTime,
)

const action = operations(() => 
    retry(3,3000, () => timeoutPromise(5000,service.sumItems('2143')))
    .then( total => EventEmitter.emit('itensTotalizados', total))
    .catch(log) 
)                        

document
.querySelector('#myButton')
.onclick = action
    