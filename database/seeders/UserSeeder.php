<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Hashing\Argon2IdHasher;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $hasher = new Argon2IdHasher;
        User::create([
            'name' => env('Medison_Name'),
            'email' => env('Medison_Email'),
            'password' => $hasher->make(env('Medison_Password'))
        ]);

    }
}
