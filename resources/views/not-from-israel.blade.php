<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>
    <div class="card bg-light">
        <br>
        <div class="card-body">
            <div class="alert alert-danger" role="alert">
                Access to the system is allowed only from Israel.
            </div>
        </div>
    </div>

</x-app-layout>
